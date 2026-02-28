import React from "react";

export default function Filters() {
  const filters = [
    { id: 1, group: "category_all", label: "Todos" },
    { id: 2, group: "category_backend", label: "Backend" },
    { id: 3, group: "category_architecture", label: "Arquitetura" },
    { id: 4, group: "category_financial", label: "Financeiro" },
    { id: 5, group: "category_integration", label: "Integração" }
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
