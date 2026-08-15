(function () {
  'use strict';

  var CONTAINER_ID = 'experts-directory';
  var FILTER_ID = 'experts-filters';
  var DATA_PATH = './data/experts.json';

  var ALL_DISCIPLINES = [
    'Nutrition', 'Genetics', 'Health', 'Engineering', 'RAS',
    'Certification', 'Policy', 'Finance', 'Processing',
    'Sustainability', 'Entrepreneurship'
  ];

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderPills(items, bgColor, textColor) {
    return items.map(function (item) {
      return '<span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mr-1.5 mb-1.5" style="background:' + bgColor + ';color:' + textColor + '">' + escapeHtml(item) + '</span>';
    }).join('');
  }

  function renderCard(expert) {
    var contactSubject = encodeURIComponent('Expert request: ' + expert.name);
    var langText = expert.country + ' · ' + expert.languages.join(', ');

    return (
      '<article class="bg-white rounded-3xl border-2 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col" style="border-color:#81cebe">' +
        '<div class="mb-3">' +
          '<h4 class="font-semibold text-lg leading-snug mb-1" style="color:#234e52">' + escapeHtml(expert.name) + '</h4>' +
          '<p class="text-sm font-medium" style="color:#1b7e82">' + escapeHtml(expert.role) + '</p>' +
          (expert.organisation !== 'Independent' ? '<p class="text-sm text-slate-500">' + escapeHtml(expert.organisation) + '</p>' : '') +
        '</div>' +
        '<p class="text-xs text-slate-500 mb-3">' + escapeHtml(langText) + '</p>' +
        '<div class="mb-2">' + renderPills(expert.discipline, '#eefbfb', '#1b7e82') + '</div>' +
        '<div class="mb-4">' + renderPills(expert.formats, '#f0fbf8', '#3d9d8a') + '</div>' +
        '<p class="text-sm text-slate-600 leading-relaxed mb-5 flex-1">' + escapeHtml(expert.bio) + '</p>' +
        '<a href="./contact.html?subject=' + contactSubject + '" class="btn-coral text-sm self-start">Request this Expert</a>' +
      '</article>'
    );
  }

  function renderFilters(activeDiscipline) {
    var html = '<div class="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by discipline">';
    html += filterButton('All', activeDiscipline === 'All');
    ALL_DISCIPLINES.forEach(function (d) {
      html += filterButton(d, activeDiscipline === d);
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

  function render(data, activeDiscipline) {
    var container = document.getElementById(CONTAINER_ID);
    var filterEl = document.getElementById(FILTER_ID);
    if (!container) return;

    if (filterEl) {
      filterEl.innerHTML = renderFilters(activeDiscipline);
      filterEl.querySelectorAll('button[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          render(data, btn.getAttribute('data-filter'));
        });
      });
    }

    var filtered = data;
    if (activeDiscipline !== 'All') {
      filtered = data.filter(function (expert) {
        return expert.discipline.indexOf(activeDiscipline) !== -1;
      });
    }

    if (filtered.length === 0) {
      container.innerHTML = '<p class="text-slate-500 text-sm col-span-full">No experts found for this discipline. Try a different filter.</p>';
      return;
    }

    container.innerHTML = filtered.map(renderCard).join('');
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
