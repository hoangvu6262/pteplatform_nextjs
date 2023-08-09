import "./styles.scss";
import WordHighLight from "@/components/management/lesson/WordHighLight/WordHighLight";
import { slipWordhelper } from "@/helpers/paragraphHelper";

type Props = {
  content: string;
};

const ParagraphHighLight = ({ content }: Props) => {
  const renderParagraph = (sentence: string, paraIndex: number) => {
    return sentence
      ?.split(" ")
      .map((word, index) => {
        // const checkSelectWord = listSelected?.some(
        //   (selectWord) =>
        //     selectWord.index === index && selectWord.paraIndex === paraIndex
        // );

        if (word) {
          const wordSplitted = slipWordhelper(word);
          return (
            <span key={index} className="para-word-hl">
              {wordSplitted[0]}
              {wordSplitted[1] && (
                <WordHighLight
                  text={wordSplitted[1]}
                  index={index}
                  isSelected={false}
                  paraIndex={paraIndex}
                />
              )}
              {wordSplitted[2]}
            </span>
          );
        }
      })
      .reduce((prev, curr) => [prev, " ", curr]);
  };

  return (
    <>
      <div className="custom-para-hl">
        {content.split("\n").map((sentence, index) => {
          return <p key={index}>{renderParagraph(sentence, index)}</p>;
        })}
      </div>
    </>
  );
};

export default ParagraphHighLight;
