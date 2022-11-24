import { Button, TableCell, TableHead, TableRow } from '@mui/material'

const headCells = [
    {
      id: '0',
      disablePadding: true,
      label: '#',
    },
    {
        id: '1',
        disablePadding: true,
        label: 'Engagement Name',
    },
    {
        id: '2',
        disablePadding: true,
        label: 'Engagement Creation Date',
    },
    {
        id: '3',
        disablePadding: true,
        label: 'State of Engagement',
    },
]

// customized table head
const EnhancedTableHead = () => {
  return (
    <TableHead
        sx={{
            fontWeight: 'bold'
        }}
    >
        <TableRow
            sx={{
                // backgroundColor: 'rgb(244, 253, 252)'
            }}
        >
            {
                headCells.map((headCell) => (
                    <TableCell
                        align="left"
                        key={headCell?.id}
                        sx={{ paddingLeft: "1rem"}}
                    >
                        {
                            headCell?.label
                        }
                    </TableCell>
                ))
            }
        </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead