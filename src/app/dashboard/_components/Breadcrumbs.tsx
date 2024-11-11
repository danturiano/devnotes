"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";

export default function Breadcrumbs() {
  const params = usePathname();
  const links = params.split("/").slice(1);
  console.log(links);

  return (
    <Breadcrumb className="mt-5">
      <BreadcrumbList>
        {links.map((item, index) => (
          <React.Fragment key={item}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/dashboard/${item === "dashboard" ? "" : item}`}
                  className="capitalize text-md"
                >
                  {item}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < links.length - 1 && (
              <BreadcrumbSeparator key={`separator-${index}`} />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
