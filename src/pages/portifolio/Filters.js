import React from "react";

export default function Filters() {
  const filters = [
    { id: 1, group: "category_all", label: "All" },
    { id: 2, group: "category_detailed", label: "Detailed" },
    { id: 3, group: "category_mockups", label: "Mockups" },
    { id: 4, group: "category_soundcloud", label: "SoundCloud" },
    { id: 5, group: "category_vimeo-videos", label: "Vimeo Videos" },
    { id: 6, group: "category_youtube-videos", label: "YouTube Videos" }
  ];

  return (
    <ul className="portfolio-filters">
      {filters.map((filter) => (
        <li key={filter.id} className={filter.id === 1 ? "active" : ""}>
          <a className="filter btn btn-sm btn-link" data-group={filter.group}>
            {filter.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
