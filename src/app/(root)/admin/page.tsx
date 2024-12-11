import { DataTable } from "@/components/data-tables";
import ContributeQuestion from "@/components/dialogs/contribute-question";
import PageHeader from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { columns } from "./questions-columns";
import { ProblemSummery } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {};

const questionsData: ProblemSummery[] = [
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "two-sum",
    status: "OPEN",
    title: "Two Sum",
    difficulty: "MEDIUM",
  },
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "search-insert-position",
    status: "PENDING",
    title: "Search Insert Position",
    difficulty: "EASY",
  },
  {
    id: "344utvyb-4rhbhfj",
    urlCode: "four-sum",
    status: "SOLVED",
    title: "Four Sum",
    difficulty: "HARD",
  },
];

export default function page({}: Props) {
  return (
    <div>
      <Tabs defaultValue="question-management">
        <div className="flex justify-between">
          <PageHeader
            title="Admin Panel"
            subtitle="Centralized hub to manage challenges, users, and platform content"
          />
          <TabsList>
            <TabsTrigger value="question-management">
              Question Management
            </TabsTrigger>
            <TabsTrigger value="testcase-management">
              Test Case Management
            </TabsTrigger>
            <TabsTrigger value="user-activity">User Activity</TabsTrigger>
            <TabsTrigger value="miscellaneous">Miscellaneous</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="question-management">
              <DataTable columns={columns} data={questionsData} />
        </TabsContent>
        <TabsContent value="user-activity">
          <div>User Activity</div>
        </TabsContent>
        <TabsContent value="testcase-management">
          <div>Testcase Management</div>
        </TabsContent>
        <TabsContent value="miscellaneous">
          <div>Miscellaneous</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
