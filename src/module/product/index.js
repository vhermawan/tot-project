import { deleteProduct, getProducts } from "@/common/query/product";
import Layout from "@/components/Layout";
import { ActionIcon, Button, Group, Modal, Text, Title } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useMutation, useQuery } from '@tanstack/react-query';
import { DataTable } from "mantine-datatable";
import { useState } from "react";
import AddDataForm from "./components/form/addDataForm";
import EditDataForm from "./components/form/editDataform";
import { notifications } from '@mantine/notifications';

export default function ProductPage(){
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [idProduct, setIdProduct] = useState(null);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [detailData, setDetailData] = useState({
    id: null,
    title: '',
    description: '',
    category: ''
  });
  
  const { data: products, refetch, isFetching } = useQuery(['list-products', skip], () => getProducts(skip), {
    initialData: []
  });

  const { mutate, isLoading: isLoadingDelete } = useMutation(deleteProduct, {
    onSuccess: (response) => {
      if(response.status === 200) {
        setIsOpenDelete(false);
        refetch();
        notifications.show({
          title: 'Success',
          message: 'Success deleted data!',
        })
      }
    },
    onError: () => {
      notifications.show({
        title: 'Failed',
        message: 'Failed deleted data!',
        color: 'red'
      })
    }
  });

  const onHandleChangePage = (page) => {
    const from = (page - 1) * 10;
    setPage(page)
    setSkip(from)
  }

  const onHandleDeleteData = (isOpen, id) => {
    setIsOpenDelete(isOpen)
    setIdProduct(id)
  }

  const onHandleEditData = (isOpen, data) => {
    const editData = {
      title: data.title,
      description: data.description,
      category: data.category,
      id: data.id
    }
    setDetailData(editData)
    setIsOpenEdit(isOpen)
  }

  return (
    <>
      <Layout title='Product Page'>
        <main>
          <section 
            style={{
              display:"flex", 
              justifyContent:"space-between",
              alignItems:"center"
            }}>
            <Title order={1} style={{marginBottom:"10px"}}>List Product</Title>
            <Button
              onClick={()=>setIsOpenAdd(true)}
            >
              Add Product
            </Button>
          </section>
          <section>
            <DataTable
              withBorder
              minHeight={180}
              columns={[
                {
                  accessor: 'title',
                  title: 'Title',
                  width: 160,
                },
                {
                  accessor: 'category',
                  title: 'Category',
                  width: 160,
                },
                {
                  accessor: 'description',
                  title: 'Description',
                  width: 160,
                },
                {
                  accessor: 'actions',
                  title: <Text>Aksi</Text>,
                  textAlignment: 'center',
                  width: 80,
                  render: (data) => (
                    <Group spacing={4} position="center" noWrap>
                      <ActionIcon color="blue" onClick={() => onHandleEditData(true, data)}>
                        <IconEdit size={16} />
                      </ActionIcon>
                      <ActionIcon color="red" onClick={() => onHandleDeleteData(true, data.id)}>
                        <IconTrash size={16} />
                      </ActionIcon>
                    </Group>
                  ),
                },
              ]}
              records={products.data?.products}
              fetching={isFetching}
              totalRecords={products.data?.totalData}
              recordsPerPage={10}
              page={page}
              onPageChange={(p) => onHandleChangePage(p)}
            />
          </section>
        </main>
        <Modal
          opened={isOpenDelete}
          withCloseButton
          onClose={() => setIsOpenDelete(false)}
          size="sm"
          radius="md"
          title="Konfirmasi hapus data"
        >
          <Text size="sm" mb="sm" weight={500}>
            Apakah yakin ingin menghapus data ini?
          </Text>

          <Group align="flex-end">
            <Button
              color="red"
              onClick={() => mutate(idProduct)}
              loading={isLoadingDelete}
            >
              Hapus
            </Button>
          </Group>
        </Modal>

        <AddDataForm 
          isOpen={isOpenAdd} 
          onClose={()=>setIsOpenAdd(false)} 
          refetch={refetch}
        />

        <EditDataForm 
          isOpen={isOpenEdit} 
          onClose={()=>setIsOpenEdit(false)} 
          refetch={refetch}
          detailData={detailData}
        />
      </Layout>
    </>
  )
}