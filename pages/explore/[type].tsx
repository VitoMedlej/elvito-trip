import {
    Box,
    TextField,
    Container,
    Typography,
    IconButton,
    InputAdornment
} from '@mui/material';
import TripCard from '../../src/Components/Cards/TripCard';
import Image from 'next/image'
import {useRouter} from 'next/router';
import TripsArray from '../../static.json'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import {useEffect} from 'react';
import SmallStoryCard from '../../src/Components/Cards/SmallStoryCard';

const Index = () => {
    const router = useRouter()
    const {type} = router.query;

    useEffect(() => {
        setTimeout(() => {

            if (type && type !== 'stories' && type !== 'destinations') {
                router.push('/')
            }
        }, 50)

    }, [])
    return (
        <div>

            <Box
                sx={{
                position: 'relative',
                width: '100%'
            }}>
                <Box
                    className='relative'
                    sx={{
                    width: '100%',
                    display: {
                        xs: 'none',
                        sm: 'block'
                    },
                    height: {
                        sm: '400px',
                        md: '430px'
                    }
                }}>
                    <Image
                        className='img'
                        layout='fill'
                        priority
                        src={`https://lp-cms-production.imgix.net/2022-04/Stocksy_txp25ffb26beKO300_Medium_2508530.jpeg?fit=crop&q=60&auto=format&w=1446&h=434&dpr=1.06`}/>
                </Box>
                <Box
                    className='relative'
                    sx={{
                    width: '100%',
                    display: {
                        xs: 'flex',
                        sm: 'none'
                    },
                    height: {
                        xs: '300px'
                    }
                }}>
                    <Image
                        className='img'
                        layout='fill'
                        priority
                        src={`https://lp-cms-production.imgix.net/2022-04/Stocksy_txp25ffb26beKO300_Medium_2508530.jpeg?fit=crop&q=60&auto=format&w=328&h=315&dpr=2`}/>
                </Box>

            </Box>
            <Container
                maxWidth='lg'
                sx={{
                margin: '0 auto',
                transform: 'translateY(-190%)',
                bottom: '25%'
            }}>
                <Typography
                    color='white'
                    fontWeight='600'
                    sx={{
                    textShadow: '1px 1px 3px #0a0a0a1c',
                    fontSize: {
                        xs: '1.3em',
                        sm: '1.5em',
                        md: '2em'
                    }
                }}>
                    Explore different {type || 'things'}
                    on Elvito Planet
                </Typography>
            </Container>
            <Container maxWidth='lg'>
                <Box>
                    <TextField
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end">
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                        sx={{
                        width: {
                            xs: '100%',
                            sm: '70%'
                        },
                        maxWidth: '300px'
                    }}
                        id="standard-required"
                        label={`Search ${type}`}
                        placeholder='Search'
                        variant="outlined"/>
                </Box>
                <Box
                    sx={{
                    mt: '2em',
                    width: '100%',
                    display: 'flex',
                    height: '100%'
                }}>

                    {type === 'destinations' && <Box
                        sx={{
                        mt: '2em',
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1em',
                        height: '100%'
                    }}>
                        {TripsArray && TripsArray.map((trip : any) => {
                            return <Box
                                key={trip.title}
                                sx={{
                                mt: '1em',
                                height: '250px !important',
                                maxWidth: '350px',
                                width: {
                                    xs: '100%',
                                    sm: '44%'
                                }
                            }}
                                className=' cursor'>

                                <TripCard
                                    img={trip.img || 'https://lp-cms-production.imgix.net/2022-01/Tourists%20at%20Wat%20Plai%20Laem%20' +
                                    'in%20Ko%20Samui%2C%20Thailand.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446'}
                                    title={trip.title}
                                    href={trip.href}/>
                            </Box>
                        })}

                    </Box>}

                    {type === 'stories' && <Box>
                        {/* <SmallStoryCard/> */}
                    </Box>
}

                </Box>
            </Container>
        </div>

    )
}

export default Index