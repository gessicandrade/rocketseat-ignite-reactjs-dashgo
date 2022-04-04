import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
	const searchInputRef = useRef<HTMLInputElement>(null)
	console.log(searchInputRef);
	
	return (
    <Flex
			as="label"
			flex="1"
			paddingY="4"
			paddingX="8"
			maxW={400}
			alignSelf="center"
			color="gray.200"
			position="relative"
			bg="gray.800"
			borderRadius="full"
		>
			<Input
				color="gray.50"
				variant="unstyled"
				placeholder="Buscar na plataforma"
				_placeholder={ { color: 'gray.400' } } 
				paddingX="4"
				mr="4"
				ref={searchInputRef}
			/>
			<Icon as={RiSearchLine} fontSize="20" />
		</Flex>
	)
}