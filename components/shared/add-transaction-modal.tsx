import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "../ui/drawer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  // NOTE: Has to be a string since we're dealing with BigInts in the backend
  amount: z.string().min(1, "Amount is required"),
})

export const AddTransactionModal = (
  {
    isOpen,
    setIsOpen
  }: {
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
  }
) => {
  const addTransactionForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '',
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    setIsOpen(false)
    addTransactionForm.reset()
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Add Expense</DrawerTitle>
            <DrawerDescription>
              Enter the details of your transaction below.
            </DrawerDescription>
          </DrawerHeader>
          <div className='p-4'>
            <Form {...addTransactionForm}>
              <form onSubmit={addTransactionForm.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={addTransactionForm.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0.00"
                          step="0.01"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DrawerFooter>
                  <Button type="submit" className="w-full">Save Expense</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                </DrawerFooter>
              </form>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
