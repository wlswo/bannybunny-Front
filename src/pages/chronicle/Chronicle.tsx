import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FC, useState } from "react";
import tempImg from "../../assets/content.jpg";

const width = 512;
const height = 512;

// PLN image - public/images 교체, contents - 세계관에 관한 내용 추가
const StoryContents = [
  {
    image: tempImg,
    contents: "지금까지의 지구 침략기",
    text: "aaaaa",
  },
  {
    image: tempImg,
    contents: "함장의 결심 : 새로운 작전",
    text: "aaaaa",
  },
  {
    image: tempImg,
    contents: "또 다른 이야기의 시작 : BannyBunny",
    text: "aaaaa",
  },
];

const Chronicle: FC = () => {
  const [page, setPage] = useState<number>(0);

  const onClickPage = (_page: number) => () => {
    setPage(_page);
  };
  const onClickPrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(StoryContents.length - 1);
    }
  };
  const onClickNext = () => {
    if (page < StoryContents.length - 1) {
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
      <Text mb={8} fontWeight="bold" fontSize="4xl" color="black">
        Chronicle
      </Text>

      <Flex mb={4}>
        {StoryContents.map((_, i) => {
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
          color="black"
        >
          ←
        </Text>
        <Flex width={width} minH={height} overflow="hidden">
          {StoryContents.map((v, i) => {
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
                  <>
                    <Text fontSize="2xl" w={width}>
                      {v.contents}
                    </Text>
                    <Text fontSize="xl" w={width}>
                      {v.text}
                    </Text>
                  </>
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
          color="black"
        >
          →
        </Text>
      </Flex>
    </Flex>
  );
};

export default Chronicle;
