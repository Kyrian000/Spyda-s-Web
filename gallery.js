/* Edit this list. For each page, set src to your image path (e.g. 'img/fence-02.jpg').
   Pages with an empty src show a placeholder drawing sheet. First page is the cover. */
window.PROJECTS=[
  {id:'fence',title:'Nassuba Gym Complex',tag:'Int Design, Space planning',pages:[
    {t:'Cover',src:''},{t:'Site plan',src:''},{t:'Fence elevations',src:''},{t:'Gate detail',src:''},{t:'Post schedule',src:''},{t:'Sections',src:''},{t:'Sections',src:''},
    {
        t: '3D Models',
        src: '',
        links: [
          { text: 'View 3D site Model', href: 'https://autode.sk/4AOXBOp' },
          { text: 'Basement Gym Interior', href: 'https://autode.sk/3TvBnjI' },
          { text: 'Ground Floor Interior', href: 'https://autode.sk/4zmKulX' },
          { text: 'First Floor Interior', href: 'https://autode.sk/4jRN52G' },
          { text: 'Second Floor Interior', href: 'https://autode.sk/3TPmpVR' },
          { text: 'Third Floor Interior', href: 'https://autode.sk/4hHnEOI' }
        ]
      }
  ]},
  {id:'wiring',title:'Building wiring estimate',tag:'Revit MEP, schedules',pages:[
    {t:'Cover',src:''},{t:'Floor plan',src:''},{t:'Circuit layout',src:''},{t:'Fixture schedule',src:''},{t:'Panel schedule',src:''},{t:'Material take-off',src:''}]},
  {id:'render',title:'Architectural visualisation',tag:'3D rendering',pages:[
    {t:'Cover',src:''},{t:'Exterior, day',src:''},{t:'Exterior, dusk',src:''},{t:'Living space',src:''},{t:'Material study',src:''},{t:'Aerial view',src:''},{t:'Details',src:''},{t:'Night view',src:''}]},
  {id:'families',title:'Custom family library',tag:'Revit families',pages:[
    {t:'Cover',src:''},{t:'Fence panel',src:''},{t:'Gate',src:''},{t:'Light fixture',src:''},{t:'Socket',src:''},{t:'Type catalog',src:''}]}
];

window.pageEl = function(proj, i) {
  var d = document.createElement('div');
  d.className = 'page';
  if (i == null) { d.className += ' blank'; return d; }
  
  var p = proj.pages[i];

  // 1. If page has an image source
  if (p.src) {
    d.innerHTML = '<img src="' + p.src + '" alt="' + p.t + '" draggable="false">';
    return d;
  }

  // 2. Cover Page
  if (i === 0) {
    d.innerHTML = '<svg viewBox="0 0 300 400" fill="none" stroke="#f2f5f7" stroke-width="1" opacity=".45"><circle cx="230" cy="110" r="50"/><circle cx="230" cy="110" r="80" stroke-dasharray="2 8"/><path d="M230 0V220M120 110H300M0 330L120 210M0 370L160 210"/></svg>' +
      '<div class="pc"><span>' + proj.tag + '</span><b>' + proj.title + '</b><i class="dot"></i></div>';
    return d;
  }

  // 3. Custom Page with Clickable Links
  if (p.links || p.url) {
    var linksHtml = '';
    
    if (p.links) {
      // Multiple links
      linksHtml = p.links.map(function(link) {
        return '<a href="' + link.href + '" target="_blank" rel="noopener noreferrer" class="page-link">' + link.text + '</a>';
      }).join('');
    } else if (p.url) {
      // Single link
      linksHtml = '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer" class="page-link">' + (p.linkText || 'Open Link') + '</a>';
    }

    d.innerHTML = '<div class="page-content-links">' +
      '<h3>' + p.t + '</h3>' +
      '<div class="links-container">' + linksHtml + '</div>' +
      '</div>' +
      '<svg viewBox="0 0 300 400" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;" fill="none" stroke="#16191B" stroke-width="1">' +
      '<rect x="18" y="18" width="264" height="364" opacity=".45"/><path d="M18 340H282" opacity=".45"/>' +
      '<text x="30" y="365" font-size="11" fill="#16191B" stroke="none" font-family="Hanken Grotesk,sans-serif">' + p.t + '</text>' +
      '<text x="270" y="365" font-size="11" fill="#6A7174" stroke="none" text-anchor="end" font-family="Hanken Grotesk,sans-serif">A-0' + i + '</text></svg>';
    return d;
  }
  var bays=2+(i%4),s='';
  for(var b=0;b<=bays;b++){s+='<path d="M'+(60+180/bays*b)+' 130V270"/>'}
  d.innerHTML='<svg viewBox="0 0 300 400" fill="none" stroke="#16191B" stroke-width="1">'+
    '<rect x="18" y="18" width="264" height="364" opacity=".45"/><path d="M18 340H282" opacity=".45"/>'+
    '<rect x="60" y="130" width="180" height="140"/>'+s+'<path d="M40 270H260"/>'+
    '<path d="M60 108H240M60 103V113M240 103V113" opacity=".5"/>'+
    '<text x="30" y="365" font-size="11" fill="#16191B" stroke="none" font-family="Hanken Grotesk,sans-serif">'+p.t+'</text>'+
    '<text x="270" y="365" font-size="11" fill="#6A7174" stroke="none" text-anchor="end" font-family="Hanken Grotesk,sans-serif">A-0'+i+'</text></svg>';
  return d;
};
