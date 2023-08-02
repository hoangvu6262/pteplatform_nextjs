import "./styles.scss";
import CustomCheckbox from "@/components/shared/CustomCheckBox/CustomCheckBox";

const CheckboxGroup = () => {
  return (
    <>
      <div className="checkbox-group">
        <CustomCheckbox name="isEmbedded" />
        <CustomCheckbox name="isShuffle" />
        <CustomCheckbox name="shared" />
      </div>
    </>
  );
};

export default CheckboxGroup;
