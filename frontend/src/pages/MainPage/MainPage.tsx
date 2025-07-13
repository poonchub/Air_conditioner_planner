import { Box, Button, Container, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react"
import { MoveRight } from "lucide-react"
import { useState } from "react"

function MainPage() {
    const [selectedOption, setSelectedOption] = useState({
        buildingTypeID: 0,
        subRoomType1ID: 0,
        subRoomType2ID: 0
    })

    const buildingType = [
        { id: 1, title: 'Home', image: '/images/option/home.png' },
        { id: 2, title: 'Commercial', image: '/images/option/commercial.png' },
        { id: 3, title: 'Public / education', image: '/images/option/public_education.png' },
    ]
    const subRoomType1 = [
        { id: 1, title: 'ห้องนอน', image: '/images/option/bedroom.png' },
        { id: 2, title: 'ห้องนั่งเล่น', image: '/images/option/living_room.png' },
        { id: 3, title: 'ห้องรับประทานอาหาร', image: '/images/option/dining_room.png' },
    ]
    const subRoomType2 = [
        { id: 1, title: 'สำนักงาน', image: '/images/option/office.png' },
        { id: 2, title: 'ร้านค้า', image: '/images/option/store.png' },
        { id: 3, title: 'ร้านอาหาร', image: '/images/option/restaurant.png' },
    ]
    return (
        <Box>
            <Box
                width={'100%'}
                padding={'5rem 2rem'}
                spaceY={4}
                backgroundImage={"url('/images/background/main_title.png')"}
                textAlign={'center'}
                color={'#FFF'}
            >
                <Heading size={'7xl'} fontWeight={600} letterSpacing="wide">
                    AIR CONDITIONER PLANNER
                </Heading>
                <Heading size={'4xl'} fontWeight={400} letterSpacing="wide">
                    BTU Calculation & Installation Guide
                </Heading>
            </Box>
            <Container py={'2rem'} spaceY={8}>
                <Box>
                    <Heading size={'2xl'} color={'#003475'}>เลือกประเภทอาคาร</Heading>
                    <Grid
                        gridTemplateColumns={'repeat(3, 1fr)'}
                        gap={10}
                        padding={'1.4rem 2rem '}
                        color={'#71b0ff'}
                        fontSize={36}
                        fontWeight={700}
                        textShadow={'2px 2px 4px #000000'}
                        fontStyle="italic"
                    >
                        {
                            buildingType.map((item, index) => {
                                return (
                                    <GridItem
                                        key={index}
                                        _hover={{ transform: "translate(0%, -2%)" }}
                                        transition={'all ease 0.5s'}
                                        onClick={() => setSelectedOption((prev) => ({ ...prev, buildingTypeID: item.id }))}
                                    >
                                        <Box position={'relative'}>
                                            <Image
                                                rounded="md"
                                                src={item.image}
                                                border={
                                                    selectedOption.buildingTypeID === item.id ? '4px solid #fe7743' : '2px solid transparent'
                                                }
                                            />
                                            <Text
                                                position={'absolute'}
                                                top="70%"
                                                left="50%"
                                                transform="translate(-50%, -50%)"
                                                width={'100%'}
                                                textAlign={'center'}
                                            >{item.title}</Text>
                                        </Box>
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                </Box>
                {
                    selectedOption.buildingTypeID === 1 && <Box>
                        <Heading size={'2xl'} color={'#003475'}>เลือกประเภทห้องย่อย</Heading>
                        <Grid
                            gridTemplateColumns={'repeat(3, 1fr)'}
                            padding={'1.4rem 2rem '}
                            gap={10}
                            color={'#003475'}
                            fontSize={20}
                            fontWeight={600}
                            textAlign={'center'}
                        >
                            {
                                subRoomType1.map((item, index) => {
                                    return (
                                        <GridItem
                                            key={index}
                                            _hover={{ transform: "translate(0%, -2%)" }}
                                            transition={'all ease 0.5s'}
                                            onClick={() => setSelectedOption((prev) => ({ ...prev, subRoomType1ID: item.id }))}
                                        >
                                            <Image
                                                rounded="md"
                                                src={item.image}
                                                border={
                                                    selectedOption.subRoomType1ID === item.id ? '4px solid #fe7743' : '2px solid transparent'
                                                }
                                            />
                                            <Text marginTop={4}>{item.title}</Text>
                                        </GridItem>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                }
                {
                    selectedOption.buildingTypeID === 2 && <Box>
                        <Heading size={'2xl'} color={'#003475'}>เลือกประเภทห้องย่อย</Heading>
                        <Grid
                            gridTemplateColumns={'repeat(3, 1fr)'}
                            padding={'1.4rem 2rem '}
                            gap={10}
                            color={'#003475'}
                            fontSize={20}
                            fontWeight={600}
                            textAlign={'center'}
                        >
                            {
                                subRoomType2.map((item, index) => {
                                    return (
                                        <GridItem
                                            key={index}
                                            _hover={{ transform: "translate(0%, -2%)" }}
                                            transition={'all ease 0.5s'}
                                            onClick={() => setSelectedOption((prev) => ({ ...prev, subRoomType2ID: item.id }))}
                                        >
                                            <Image
                                                rounded="md"
                                                src={item.image}
                                                border={
                                                    selectedOption.subRoomType2ID === item.id ? '4px solid #fe7743' : '2px solid transparent'
                                                }
                                            />
                                            <Text marginTop={4}>{item.title}</Text>
                                        </GridItem>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                }
                {
                    selectedOption.buildingTypeID != 0 &&
                    <Flex width={'100%'} justifyContent={'end'}>
                        <Button width={100} backgroundColor={'#003475'} fontSize={20}>
                            Next
                        </Button>
                    </Flex>
                }

            </Container>
        </Box>

    )
}

export default MainPage