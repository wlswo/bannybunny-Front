import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FC, useState } from "react";
import tempImg from "../../assets/content.jpg";

const width = 512;
const height = 512;

// PLN image - public/images 교체, contents - 세계관에 관한 내용 추가
const EventContents = [
  {
    image: tempImg,
    contents: "이벤트1",
  },
  {
    image: tempImg,
    contents: "이벤트2",
  },
  {
    image: tempImg,
    contents: "이벤트3",
  },
];

const Event: FC = () => {
  const [page, setPage] = useState<number>(0);

  const onClickPage = (_page: number) => () => {
    setPage(_page);
  };
  const onClickPrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(EventContents.length - 1);
    }
  };
  const onClickNext = () => {
    if (page < EventContents.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  return (
    <Flex
      id="story"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl" color="white">
        Monthly Events
      </Text>
      <Text mb={8} fontWeight="bold" fontSize="xl" color="lightgray">
        각성 바니만을 위해 준비된 이벤트에 참여하세요!
      </Text>

      <Flex mb={4}>
        {EventContents.map((_, i) => {
          return (
            <Box
              key={i}
              mx={1}
              w={4}
              h={4}
              rounded="full"
              bgColor={i === page ? "gray.300" : "gray.100"}
              onClick={onClickPage(i)}
              cursor="pointer"
            ></Box>
          );
        })}
      </Flex>
      <Flex alignItems="center">
        <Text
          onClick={onClickPrev}
          mr={12}
          fontSize="6xl"
          cursor="pointer"
          color="white"
        >
          ←
        </Text>
        <Flex width={width} minH={height} overflow="hidden">
          {EventContents.map((v, i) => {
            return (
              <Box
                key={i}
                width={width}
                flex="none"
                ml={i === 0 ? `-${page}00%` : ""}
                style={{ transition: "all 0.3s ease-out" }}
              >
                <Image src={v.image} alt="Story" />
                {i === page && (
                  <Text fontSize="xl" w={width}>
                    {v.contents}
                  </Text>
                )}
              </Box>
            );
          })}
        </Flex>
        <Text
          onClick={onClickNext}
          ml={12}
          fontSize="6xl"
          cursor="pointer"
          color="white"
        >
          →
        </Text>
      </Flex>
    </Flex>
  );
};

export default Event;
