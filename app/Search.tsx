import { Button, Input } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function Search() {
  return (
    <div className="flex flex-col gap-2 my-4">
      <div className="flex min-w-[70vw] border-primary1 ">
        <Input
          className="h-12 w-[80%]"
          size="sm"
          placeholder="Type a name ..."
        ></Input>
        <Button className="h-12 w-[20%] bg-primary1 text-white" variant="solid">
          Search
        </Button>
      </div>
      <div className="flex min-w-[70vw] gap-2 ">
        <Autocomplete
          label="Select an animal"
          className="max-w-xs bg-primary1"
          size="sm"
        >
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
        <Autocomplete
          label="Select an animal"
          className="max-w-xs bg-primary1"
          size="sm"
        >
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
        <Autocomplete
          label="Select an animal"
          className="max-w-xs bg-primary1"
          size="sm"
        >
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
        <Autocomplete
          label="Select an animal"
          className="max-w-xs bg-primary1"
          size="sm"
        >
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
      </div>
    </div>
  );
}
