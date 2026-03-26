import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface SearchBarProps {
  onSearch: (query: string) => void;
}
const SearchBar = ({
  onSearch
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  return;
};
export default SearchBar;