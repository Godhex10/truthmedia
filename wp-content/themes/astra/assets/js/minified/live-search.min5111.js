(()=>{function n(e){let r="";return Object.entries(e).forEach(([e,t])=>{e=astra_search.search_post_types_labels[e]||e+"s";r+=`<label class="ast-search--posttype-heading"> ${e} </label>`,t.forEach(e=>{t=e.title.rendered;var t=(new DOMParser).parseFromString(t,"text/html").documentElement.textContent,a=document.getElementById("ast-search-form"),s=document.getElementById("ast-seach-full-screen-form");r+=s||a?`<a class="ast-search-item" role="option" target="_self" href="${e.link}" tabindex="1"> <span> ${t} </span> </a>`:`<a class="ast-search-item" role="option" target="_self" href="${e.link}"> <span> ${t} </span> </a>`})}),r}window.addEventListener("load",function(e){document.querySelectorAll(".search-field").forEach(c=>{c.addEventListener("input",function(e){let s=c.closest("form.search-form");var e=e.target.value.trim(),t=astra_search.search_page_condition?astra_search.search_page_post_types:astra_search.search_post_types,a=document.querySelectorAll(".ast-live-search-results");a&&a.forEach(function(e){e.parentNode.removeChild(e)});try{var r=`${astra_search.rest_api_url}wp/v2/posts${-1<astra_search.rest_api_url.indexOf("?")?"&":"?"}_embed=1&post_type=ast_queried:${t.join(":")}&per_page=${astra_search.search_posts_per_page}&search=`+e+(astra_search.search_language?"&lang="+astra_search.search_language:""),l=new XMLHttpRequest;l.open("GET",r,!0),l.onreadystatechange=function(){if(4===l.readyState&&200===l.status){var a=JSON.parse(l.responseText);let e="";if(0<a.length){let t={};a.forEach(e=>{e.type in t?t[e.type].push(e):t[e.type]=[e]});a=n(t);e=`
									<div
										class="ast-live-search-results"
										role="listbox"
										aria-label="Search results"
										style="top: ${parseInt(s.offsetHeight)+10}px;"
									>
										${a}
									</div>
								`}else e=`
									<div
										class="ast-live-search-results"
										role="listbox"
										aria-label="Search results"
										style="top: ${parseInt(s.offsetHeight)+10}px;"
									>
										<label class="ast-search--no-results-heading"> ${astra_search.no_live_results_found} </label>
									</div>
								`;a=document.querySelectorAll(".ast-live-search-results");a&&a.forEach(function(e){e.parentNode.removeChild(e)}),s.insertAdjacentHTML("beforeend",e)}},l.send()}catch(e){console.error("Error while fetching data:",e)}})})}),document.addEventListener("click",function(e){var e=e.target.closest("form.search-form");null!==e?e.querySelector(".ast-live-search-results")&&(e.querySelector(".ast-live-search-results").style.display="block"):(e=document.querySelectorAll(".ast-live-search-results"))&&e.forEach(function(e){e.style.display="none"})})})();