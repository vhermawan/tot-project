import { addProduct } from "@/common/query/product";
import { Button, Group, Modal, Select, TextInput, Textarea } from "@mantine/core";
import { useForm } from '@mantine/form';
import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';

const handleValidateForm = (data, field) => {
  return (data === '' || data === null ? `${field} must filled` : null)
}

export default function AddDataForm(props) {
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      category: '',
    },

    validate: {
      title: (value) => handleValidateForm(value, 'Title'),
      description: (value) => handleValidateForm(value, 'Description'),
      category: (value) => handleValidateForm(value, 'Category'),
    },
  });

  const handleCloseModal = () => {
    props.onClose();
    form.reset();
  }

  const { mutate, isLoading } = useMutation(addProduct, {
    onSuccess: (response) => {
      if(response.status === 201) {
        handleCloseModal();
        props.refetch();
        notifications.show({
          title: 'Success',
          message: 'Success created data!',
        })
      }
    },
    onError: () => {
      notifications.show({
        title: 'Failed',
        message: 'Failed add data!',
        color: 'red'
      })
    }
  });

  return (
    <>
      <Modal
        opened={props.isOpen}
        withCloseButton
        onClose={handleCloseModal}
        size="md"
        radius="md"
        title="Add Product"
      >
       <form onSubmit={form.onSubmit((values) => mutate(values))}>
          <TextInput
            withAsterisk
            label="Title"
            placeholder="Input your title product"
            {...form.getInputProps('title')}
          />
          <Textarea
            style={{marginTop:"10px"}}
            withAsterisk
            label="Description"
            placeholder="Input your description product"
            {...form.getInputProps('description')}
          />
          <Select
            label="Category"
            withAsterisk
            style={{marginTop:"10px"}}
            placeholder="Pick one"
            data={[
              { value: 'smartphone', label: 'Smartphone' },
              { value: 'shoes', label: 'Shoes' },
              { value: 'shirt', label: 'Shirt' },
              { value: 'laptop', label: 'Laptop' },
            ]}
            {...form.getInputProps('category')}
          />
        <Group align="flex-end" style={{marginTop:"20px"}}>
          <Button
            type="submit"
            loading={isLoading}
          >
            Save
          </Button>
        </Group>
       </form>
      </Modal>
    </>
  )
}