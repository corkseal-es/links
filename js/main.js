const socialLinks = [
  {
    name: "Web",
    url: "https://corkseal.es",
    platform: "web",
    iconClass: "fa-solid fa-globe"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/corkseal/",
    platform: "instagram",
    iconClass: "fa-brands fa-instagram"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/corkseal",
    platform: "linkedin",
    iconClass: "fa-brands fa-linkedin-in"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61573092782953",
    platform: "facebook",
    iconClass: "fa-brands fa-facebook-f"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/34613011538",
    platform: "whatsapp",
    iconClass: "fa-brands fa-whatsapp"
  },
  {
    name: "Email",
    url: "mailto:info@corkseal.es",
    platform: "email",
    iconClass: "fa-solid fa-envelope"
  },
  {
    name: "Contáctanos",
    url: "tel:+34613011538",
    platform: "contact",
    iconClass: "fa-solid fa-phone",
    featured: true
  }
];

const listElement = document.getElementById("social-links");

function trackLinkClick(link) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "social_link_click", {
    link_name: link.name,
    link_platform: link.platform,
    link_url: link.url,
    transport_type: "beacon"
  });
}

socialLinks.forEach((link, index) => {
  const item = document.createElement("li");
  item.className = "link-item";
  item.style.animationDelay = `${index * 0.08}s`;

  const anchor = document.createElement("a");
  anchor.className = `social-link ${link.platform}`;
  anchor.dataset.linkName = link.name;
  anchor.dataset.linkPlatform = link.platform;
  anchor.dataset.linkUrl = link.url;
  if (link.featured) {
    anchor.classList.add("featured");
  }
  anchor.href = link.url;
  if (!link.url.startsWith("mailto:") && !link.url.startsWith("tel:")) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }

  const content = document.createElement("span");
  content.className = "link-content";

  const iconWrap = document.createElement("span");
  iconWrap.className = "icon-wrap";

  const icon = document.createElement("i");
  icon.className = `link-icon ${link.iconClass}`;
  icon.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.className = "link-label";
  text.textContent = link.name;

  const arrow = document.createElement("i");
  arrow.className = "link-arrow fa-solid fa-chevron-right";
  arrow.setAttribute("aria-hidden", "true");

  iconWrap.appendChild(icon);
  content.appendChild(iconWrap);
  content.appendChild(text);
  anchor.appendChild(content);
  anchor.appendChild(arrow);

  anchor.addEventListener("click", () => {
    trackLinkClick(link);
  });

  item.appendChild(anchor);
  listElement.appendChild(item);
});
