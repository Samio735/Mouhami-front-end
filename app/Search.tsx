import { Button, Input } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function Search() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex min-w-[70vw] ">
        <Input
          className="h-12 w-[80%]"
          size="sm"
          placeholder="Type a name ..."
        ></Input>
        <Button className="h-12 w-[20%]">Search</Button>
      </div>
      <div className="flex min-w-[70vw] ">
        <Autocomplete label="Select an animal" className="max-w-xs border-0">
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
        <Autocomplete label="Select an animal" className="max-w-xs">
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
        <Autocomplete label="Select an animal" className="max-w-xs">
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
        <Autocomplete label="Select an animal" className="max-w-xs">
          <AutocompleteItem value="{animal.value}"></AutocompleteItem>
        </Autocomplete>
      </div>
    </div>
  );
}
