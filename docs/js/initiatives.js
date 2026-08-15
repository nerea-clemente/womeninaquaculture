(function () {
  'use strict';

  var CONTAINER_ID = 'initiatives-directory';
  var FILTER_ID = 'initiatives-filters';
  var DATA_PATH = './data/initiatives.json';

  var REGION_ORDER = [
    'Global',
    'Africa',
    'Asia-Pacific',
    'Europe',
    'Latin America & Caribbean',
    'Mediterranean & Black Sea',
    'North America'
  ];

  function groupByRegion(entries) {
    var groups = {};
    entries.forEach(function (e) {
      var r = e.region || 'Other';
      if (!groups[r]) groups[r] = [];
      groups[r].push(e);
    });
    Object.keys(groups).forEach(function (r) {
      groups[r].sort(function (a, b) { return a.name.localeCompare(b.name); });
    });
    return groups;
  }

  function renderCard(entry) {
    var label = entry.acronym ? entry.acronym : entry.name.split('—')[0].trim();
    return (
      '<article class="bg-white rounded-3xl border-2 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style="border-color:#81cebe">' +
        '<div class="flex items-start justify-between gap-3 mb-3">' +
          '<div>' +
            '<h4 class="font-semibold text-base leading-snug" style="color:#234e52">' + escapeHtml(entry.name) + '</h4>' +
            '<span class="text-xs font-medium" style="color:#1b7e82">' + escapeHtml(entry.region) + (entry.country ? ' · ' + escapeHtml(entry.country) : '') + '</span>' +
          '</div>' +
        '</div>' +
        '<p class="text-sm text-slate-600 leading-relaxed mb-4">' + escapeHtml(entry.description) + '</p>' +
        '<a href="' + escapeAttr(entry.url) + '" target="_blank" rel="noopener noreferrer external" ' +
          'class="text-sm font-semibold hover:underline" style="color:#1b7e82">' +
          'Visit website &#8594;' +
        '</a>' +
      '</article>'
    );
  }

  function renderGroup(region, entries) {
    var cards = entries.map(renderCard).join('');
    return (
      '<div class="mb-12" data-region="' + escapeAttr(region) + '">' +
        '<h3 class="font-display text-2xl mb-6" style="color:#234e52">' + escapeHtml(region) + '</h3>' +
        '<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">' + cards + '</div>' +
      '</div>'
    );
  }

  function renderFilters(regions, activeRegion) {
    var html = '<div class="flex flex-wrap gap-2 mb-10" role="radiogroup" aria-label="Filter by region">';
    html += filterButton('All', activeRegion === 'All');
    regions.forEach(function (r) {
      html += filterButton(r, activeRegion === r);
    });
    html += '</div>';
    return html;
  }

  function filterButton(label, active) {
    var bg = active ? 'background:#1b7e82; color:#fff;' : 'background:#fff; color:#234e52; border:1px solid #d1d5db;';
    return (
      '<button type="button" role="radio" aria-checked="' + (active ? 'true' : 'false') + '" ' +
        'class="px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all hover:shadow-sm" ' +
        'style="' + bg + '" ' +
        'data-filter="' + escapeAttr(label) + '">' +
        escapeHtml(label) +
      '</button>'
    );
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function render(data, activeRegion) {
    var container = document.getElementById(CONTAINER_ID);
    var filterEl = document.getElementById(FILTER_ID);
    if (!container) return;

    var groups = groupByRegion(data);
    var presentRegions = REGION_ORDER.filter(function (r) { return groups[r]; });

    if (filterEl) {
      filterEl.innerHTML = renderFilters(presentRegions, activeRegion);
      filterEl.querySelectorAll('button[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          render(data, btn.getAttribute('data-filter'));
        });
        btn.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            render(data, btn.getAttribute('data-filter'));
          }
        });
      });
    }

    var html = '';
    presentRegions.forEach(function (region) {
      if (activeRegion === 'All' || activeRegion === region) {
        html += renderGroup(region, groups[region]);
      }
    });
    container.innerHTML = html;
  }

  function init() {
    fetch(DATA_PATH)
      .then(function (res) { return res.json(); })
      .then(function (data) { render(data, 'All'); })
      .catch(function (err) {
        var c = document.getElementById(CONTAINER_ID);
        if (c) c.innerHTML = '<p class="text-slate-500 text-sm">Unable to load directory. Please try again later.</p>';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
