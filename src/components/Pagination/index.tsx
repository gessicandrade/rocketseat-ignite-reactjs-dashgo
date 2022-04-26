import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number
    registersPerPage: number
    currentPage?: number
    onPageChange?: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1;
    }).filter(page => page > 0)
}

generatePagesArray(2, 5)

export function Pagination({ 
    totalCountOfRegisters, 
    registersPerPage = 10, 
    currentPage = 1,
    onPageChange,
}: PaginationProps) {
    
    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)
    const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []
    const nextPages = currentPage < lastPage ? Math.min(currentPage + siblingsCount, lastPage) : []

    return (
        <Stack spacing="6" mt="8" justify="space-between" align="center" direction={["column","row"]}>
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <PaginationItem isCurrent={true} number={1} />
                <PaginationItem number={2} isCurrent={false} />
                <PaginationItem number={3} isCurrent={false} />
                <PaginationItem number={4} isCurrent={false} />
                <PaginationItem number={5} isCurrent={false} />
                <PaginationItem number={6} isCurrent={false} />
                <PaginationItem number={7} isCurrent={false} />
                <PaginationItem number={8} isCurrent={false} />
            </HStack>
        </Stack>
    )
}