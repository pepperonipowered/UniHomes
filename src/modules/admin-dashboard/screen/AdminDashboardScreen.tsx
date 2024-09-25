"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import tempValues from "@/lib/constants/tempValues";
import { useState } from "react";
import { ProfileAlert } from "../components/ProfileAlert";
import { NewLessors } from "../components/types";
import AdminPagination from "../components/AdminPagination";
import ApproveConfirmationModal from "../components/ApproveConfirmationModal";
import RejectConfirmationModal from "../components/RejectConfirmationModal";
import spiels from "@/lib/constants/spiels";

const getInitials = (name: string) => {
  const names = name.split(" ");
  if (names.length === 0) return "NN";
  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial =
    names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : "";
  return `${firstInitial}${lastInitial}`;
};

const ITEMS_PER_PAGE = 6;

export function AdminDashboardScreen() {
  const [newLessors] = useState<NewLessors[]>(tempValues.LESSORS);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLessor, setSelectedLessor] = useState<NewLessors | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const totalPages = Math.ceil(newLessors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentLessors = newLessors.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // for ProfileAlert
  const handleRowClick = (lessor: NewLessors) => {
    setSelectedLessor(lessor);
    setIsAlertOpen(true);
  };

  // ApproveModal
  const handleApproveClick = (lessor: NewLessors) => {
    setSelectedLessor(lessor);
    setIsApproveModalOpen(true);
  };

  // RejectModal
  const handleRejectClick = (lessor: NewLessors) => {
    setSelectedLessor(lessor);
    setIsRejectModalOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setSelectedLessor(null);
  };

  const handleApprove = () => {
    setIsApproveModalOpen(false);
  };

  const handleReject = () => {
    setIsRejectModalOpen(false);
  };

  return (
    <div className="dark:bg-secondary h-screen">
      <div className="mx-4 py-10  lg:pt-5 ">
        <Card className="h-full m-2 lg:m-2 md:m-2 bg-white dark:bg-secondary">
          <CardHeader>
            <CardTitle>{spiels.ADMIN_CARD_HEADER}</CardTitle>
            <CardDescription>
              Upcoming {newLessors.length} lessors waiting for approval
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col h-[500px]">
            <div className="overflow-y-auto">
              <Table>
                <TableBody>
                  {currentLessors.map((lessor) => (
                    <TableRow
                      key={lessor.id}
                      onClick={() => handleRowClick(lessor)}
                      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          <Avatar className="mr-3 lg:mr-4">
                            <AvatarFallback>
                              {getInitials(lessor.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <h3 className="font-bold text-sm lg:text-base">
                              {lessor.name}
                            </h3>
                            <p>{lessor.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="gap-2 flex justify-end">
                          {/* Stop the event from bubbling up to the row click */}
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApproveClick(lessor);
                            }}
                          >
                            {spiels.BUTTON_APPROVE}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRejectClick(lessor);
                            }}
                          >
                            {spiels.BUTTON_REJECT}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* pagination */}
        <div className="flex justify-end mt-4">
          <AdminPagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>

        {/* Profile Alert Modal */}
        {isAlertOpen && selectedLessor && (
          <ProfileAlert lessor={selectedLessor} onClose={handleAlertClose} />
        )}

        {/* Approve Confirmation Modal */}
        <ApproveConfirmationModal
          isOpen={isApproveModalOpen}
          onClose={() => setIsApproveModalOpen(false)}
          handleApprove={handleApprove}
        />

        {/* Reject Confirmation Modal */}
        <RejectConfirmationModal
          isOpen={isRejectModalOpen}
          onClose={() => setIsRejectModalOpen(false)}
          handleReject={handleReject}
        />
      </div>
    </div>
  );
}
