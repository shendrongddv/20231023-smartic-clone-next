import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dataIngridients = [
  {
    id: "bd9bad99-2d79-5625-9a8c-f9f190797234",
    itemName: "Calories",
    itemMass: "170",
  },
  {
    id: "fe5564d1-2f0e-5fff-ace3-ddf26b49ee10",
    itemName: "Total fat",
    itemMass: "9g",
  },
  {
    id: "446708a1-57a5-5e9c-98db-ef2bbd9fda25",
    itemName: "Saturated fat",
    itemMass: "2.5g",
  },
  {
    id: "3a3fcf92-7fa1-57e0-879b-81de256be71a",
    itemName: "Trans fat",
    itemMass: "0g",
  },
  {
    id: "9ce650a1-7910-5971-be6c-348e9d1eaffe",
    itemName: "Cholesterol",
    itemMass: "0mg",
  },
  {
    id: "cd90ad89-68c7-5855-b32a-d79bd201eeee",
    itemName: "Sodium",
    itemMass: "300mg",
  },
  {
    id: "731b1796-a7d2-572d-a677-31020b05fa89",
    itemName: "Potassium",
    itemMass: "200mg",
  },
  {
    id: "84778938-2ae2-522c-bffb-79614513508f",
    itemName: "Total carbohydrate",
    itemMass: "4g",
  },
  {
    id: "6b681a6a-d9bd-5e39-bb6a-6d7782f276c1",
    itemName: "Dietary",
    itemMass: "2g",
  },
  {
    id: "086ce303-0b4d-5f86-90f6-027e99d350c0",
    itemName: "Sugar",
    itemMass: "2g",
  },
  {
    id: "dec7b546-10cb-556e-a511-022202bbc745",
    itemName: "Protein",
    itemMass: "21g",
  },
];

export const D4_Table_Ingridient = () => {
  return (
    <Table>
      <TableBody>
        {dataIngridients?.map((item) => (
          <TableRow key={item.id} className="border-none">
            <TableCell className="px-0 py-1">{item.itemName}</TableCell>
            <TableCell className="flex justify-end px-0 py-1 font-semibold">
              {item.itemMass}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
