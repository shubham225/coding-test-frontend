"use client"

import React, { useState } from "react";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ContributeQuestion from "@/components/dialogs/contribute-question";

type Props = {};

export default function page({}: Props) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleContributeCodingQues : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setOpenDialog(true);
  }

  return (
    <div>
      <PageHeader
        title="Contribute Question"
        subtitle="Submit your own coding problems to the platform"
      />
      <div className="flex flex-col gap-4 mt-14">
        <Label className="font-bold text-xl">Select Question Type</Label>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
          <Button variant="outline" className="h-40" onClick={handleContributeCodingQues}>
            <CardHeader>
              <CardTitle className="self-start">Coding</CardTitle>
              <CardDescription className="self-start">
                General purpose programming in varity of languages.
              </CardDescription>
            </CardHeader>
          </Button>

          <Button variant="outline" className="h-40">
            <CardHeader>
              <CardTitle className="self-start">Multiple Choice</CardTitle>
              <CardDescription className="self-start">
                General purpose programming in varity of languages.
              </CardDescription>
            </CardHeader>
          </Button>

          <Button variant="outline" className="h-40">
            <CardHeader>
              <CardTitle className="self-start">Subjective</CardTitle>
              <CardDescription className="self-start">
                General purpose programming in varity of languages.
              </CardDescription>
            </CardHeader>
          </Button>
        </div>
      </div>
      <div className="size-full">
        <ContributeQuestion open={openDialog} onOpenChange={setOpenDialog}/>
      </div>
    </div>
  );
}
