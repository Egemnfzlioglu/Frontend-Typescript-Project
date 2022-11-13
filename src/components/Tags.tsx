import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
import { FC } from 'react';

interface ChipData {
    handleDelete: (data: string) => void
    chipData: string[]
}

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const Tags: FC<ChipData> = ({ chipData, handleDelete }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
            }}
            component="ul"
        >
            {chipData.map((data, key) => {

                return (
                    <ListItem key={key}>
                        <Chip
                            label={data.trim()}
                            onDelete={() => handleDelete(data)}
                        />
                    </ListItem>
                );
            })}
        </Box>
    );
}
export default Tags