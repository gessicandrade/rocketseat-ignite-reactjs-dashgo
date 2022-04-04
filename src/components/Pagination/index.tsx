import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
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