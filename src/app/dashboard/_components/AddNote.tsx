import { Button } from "@/components/Button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AddNote() {
  return (
    <div>
      <Link href={"/dashboard/new-note"}>
        <Button>
          <Plus />
          New Note
        </Button>
      </Link>
    </div>
  );
}
