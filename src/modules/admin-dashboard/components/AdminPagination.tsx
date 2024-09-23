import React from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

const AdminPagination = ({
	totalPages,
	currentPage,
	handlePageChange,
}: any) => {
	return (
		<div>
			<Pagination>
				<PaginationContent className='flex items-right'>
					<PaginationItem>
						{currentPage > 1 ? (
							<PaginationPrevious
								href='#'
								onClick={() => handlePageChange(currentPage - 1)}
							/>
						) : (
							<Button variant='ghost' disabled>
								<PaginationPrevious href='#' />
							</Button>
						)}
					</PaginationItem>
					{Array.from({ length: totalPages }, (_, index) => (
						<PaginationItem key={index + 1}>
							<PaginationLink
								href='#'
								isActive={currentPage === index + 1}
								onClick={() => handlePageChange(index + 1)}
							>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}
					<PaginationItem>
						{currentPage < totalPages ? (
							<PaginationNext
								href='#'
								onClick={() => handlePageChange(currentPage + 1)}
							/>
						) : (
							<Button variant='ghost' disabled className='mr-0 pr-0'>
								<PaginationNext href='#' />
							</Button>
						)}
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default AdminPagination;
