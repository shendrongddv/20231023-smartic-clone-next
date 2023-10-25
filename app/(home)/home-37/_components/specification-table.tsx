import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const dataSpecification = [
  {
    label: "Color",
    value: "Black, White, Red",
  },
  {
    label: "Weight",
    value: "2.67 Pounds",
  },
  {
    label: "Material",
    value: "Plastic",
  },
  {
    label: "Dimensions",
    value: "6.1″D x 10.75″W x 10.9″H",
  },
  {
    label: "Features",
    value: "Portable",
  },
];

export function SpecificationTable() {
  return (
    <Table className="mt-4 text-base">
      <TableBody>
        {dataSpecification.map((data) => (
          <TableRow key={data.label}>
            <TableCell className="w-3/12 border font-semibold text-black">
              {data.label}
            </TableCell>
            <TableCell className="w-max border">{data.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
