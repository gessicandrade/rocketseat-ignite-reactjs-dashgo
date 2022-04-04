import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    type CreateUserFormData = {
      name: string;
      email: string;
      passwowd: string;
      password_confirmation: string;
    }

    const createUserFormSchema = yup.object().shape({
      name: yup.string().required('Nome é obrigatório'),
      email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
      password: yup.string().required('Senha é obrigatório').min(6, 'No mínimo 6 caracteres'),
      password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
      ], 'As senhas precisam ser iguais')
    })

    const { register, handleSubmit, formState, formState: { errors } } = useForm({
      resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    return (
      <Box>
        <Header />
        <Flex w="100%" maxW="1480" my="6" mx="auto" px="6">
          <Sidebar />
          <Box as="form" flex="1" borderRadius="8" bg="gray.800" p="8" onSubmit={handleSubmit(handleCreateUser)}>
            <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
            <Divider my="6" borderColor="gray.700" />
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="name" label="Nome Completo" error={errors.name} {...register('name')} />
                <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')} />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação de Senha"
                  error={errors.password_confirmation}
                  {...register('password_confirmation')} 
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref><Button colorScheme="whiteAlpha">Cancelar</Button></Link>
                <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>      
    )
}