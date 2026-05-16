"use client";

import { useState } from "react";
import type { Product, ProductVariant } from "@/lib/types";

export function VariantSelector({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (variant: ProductVariant) => void;
}) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  // Case 1: Single default variant - no selector needed
  if (
    product.options.length === 1 &&
    product.options[0].values.length === 1 &&
    product.options[0].values[0] === "Default Title"
  ) {
    return null;
  }

  // Case 2: One option with > 8 values - searchable list
  if (product.options.length === 1 && product.options[0].values.length > 8) {
    const option = product.options[0];
    const [searchTerm, setSearchTerm] = useState("");
    const filteredValues = option.values.filter((v) =>
      v.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-[var(--color-ink)]">
          {option.name}
        </label>
        <input
          type="text"
          placeholder={`Search ${option.name.toLowerCase()}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        />
        <div className="max-h-80 space-y-1 overflow-y-auto rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-2">
          {filteredValues.map((value) => {
            const variant = product.variants.find((v) => v.options.includes(value));
            const selected = selectedOptions[option.name] === value;

            return (
              <button
                key={value}
                onClick={() => {
                  setSelectedOptions({ [option.name]: value });
                  if (variant) onSelect(variant);
                }}
                disabled={!variant?.available}
                className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${
                  selected
                    ? "bg-[var(--color-accent)] text-white"
                    : variant?.available
                    ? "text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]"
                    : "text-[var(--color-muted)] line-through"
                }`}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Case 3: Standard pill selector for each option
  return (
    <div className="space-y-6">
      {product.options.map((option) => {
        if (option.name === "Title") return null;

        return (
          <div key={option.name} className="space-y-3">
            <label className="block text-sm font-semibold text-[var(--color-ink)]">
              {option.name}
            </label>
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const variant = product.variants.find((v) =>
                  v.options.every(
                    (vOpt, idx) =>
                      product.options[idx].name === option.name
                        ? vOpt === value
                        : !selectedOptions[product.options[idx].name] ||
                          selectedOptions[product.options[idx].name] === vOpt
                  )
                );
                const selected = selectedOptions[option.name] === value;

                return (
                  <button
                    key={value}
                    onClick={() => {
                      const newSelected = { ...selectedOptions, [option.name]: value };
                      setSelectedOptions(newSelected);

                      const matchedVariant = product.variants.find((v) =>
                        product.options.every(
                          (opt, idx) =>
                            !newSelected[opt.name] || v.options[idx] === newSelected[opt.name]
                        )
                      );
                      if (matchedVariant) onSelect(matchedVariant);
                    }}
                    disabled={!variant?.available}
                    className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${
                      selected
                        ? "border-transparent bg-[var(--color-accent)] text-white"
                        : variant?.available
                        ? "border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-ink)]"
                        : "border-[var(--color-border)] text-[var(--color-muted)] line-through"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
