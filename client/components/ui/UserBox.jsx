import * as React from "react";
import { useRouter } from "next/navigation";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Settings, Link, Users } from "lucide-react";

export function UserBox({ parameters, person, links }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const popoverTriggerRef = React.useRef(null);
  const router = useRouter();

  const togglePopover = () => {
    setOpen(!open);
  };

  const closePopover = () => {
    setOpen(false);
  };

  const frameworks = [
    {
      value: "parameters",
      label: "Parameters",
      icon: <Settings className="mr-2 w-5" />,
      link: parameters,
    },
    {
      value: "person",
      label: "Person",
      icon: <Users className="mr-2 w-5" />,
      link: person,
    },

    {
      value: "links",
      label: "Links",
      icon: <Link className="mr-2 w-5" />,
      link: links,
    },
  ];
  return (
    <Popover open={open} onClose={closePopover}>
      <PopoverTrigger asChild>
        <div
          ref={popoverTriggerRef}
          onClick={togglePopover}
          className="w-[200px] flex items-center cursor-pointer bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white border rounded-md p-[6px] px-3 justify-between text-sm"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "General and Security"}{" "}
          <FontAwesomeIcon icon={faBars} className="ml-1" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup className="bg-zinc-900 text-white">
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  closePopover();
                  router.push(framework.link);
                }}
              >
                {framework.icon}
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
