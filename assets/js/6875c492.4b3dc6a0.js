(self.webpackChunkthe_tech_troll_tube_website=self.webpackChunkthe_tech_troll_tube_website||[]).push([[610],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),m=a(6742),i=a(3541),c=a(1217),o="blogPostTitle_GeHD",g="blogPostDate_fNvV",u=a(6700);var d=function(e){var t,a,d=(t=(0,u.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),h=e.children,p=e.frontMatter,E=e.metadata,b=e.truncated,v=e.isBlogPostPage,_=void 0!==v&&v,f=E.date,N=E.formattedDate,k=E.permalink,Z=E.tags,T=E.readingTime,w=p.author,P=p.title,M=p.image,y=p.keywords,L=p.author_url||p.authorURL,I=p.author_title||p.authorTitle,x=p.author_image_url||p.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(c.Z,{keywords:y,image:M}),r.createElement("article",{className:_?void 0:"margin-bottom--xl"},(a=_?"h1":"h2",r.createElement("header",null,r.createElement(a,{className:(0,l.Z)("margin-bottom--sm",o)},_?P:r.createElement(m.Z,{to:k},P)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:f,className:g},N,T&&r.createElement(r.Fragment,null," \xb7 ",d(T)))),r.createElement("div",{className:"avatar margin-vert--md"},x&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:L},r.createElement("img",{src:x,alt:w})),r.createElement("div",{className:"avatar__intro"},w&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(m.Z,{href:L},w)),r.createElement("small",{className:"avatar__subtitle"},I)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:i.Z},h)),(Z.length>0||b)&&r.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return r.createElement(m.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),b&&r.createElement("div",{className:"col text--right"},r.createElement(m.Z,{to:E.permalink,"aria-label":"Read more about "+P},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(7294),l=a(6010),n=a(6742),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";function u(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:m},t.title),r.createElement("ul",{className:i},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:g},e.title))}))))}},9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(2611),n=a(3146),s=a(6742),m=a(5601),i=a(4973),c=a(6700);function o(e){var t,a=e.tagName,l=e.count,n=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.createElement(i.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(l),tagName:a}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,a=e.items,g=e.sidebar,u=t.allTagsPath,d=t.name,h=t.count;return r.createElement(l.Z,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(m.Z,{sidebar:g})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(o,{count:h,tagName:d})),r.createElement(s.Z,{href:u},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}}}]);