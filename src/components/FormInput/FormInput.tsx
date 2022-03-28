import { FormControl, InputBase, InputLabel, styled } from "@mui/material";

const StyledInput = styled(InputBase)(({ theme }) => ({
  label: {
    marginBottom: 1,
    top: "-1",
  },
  "& .MuiInputBase-input": {
    width: "100%",
    borderBottom: "2px solid black",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
}));

interface FormInputProps {
  label: string;
  defaultValue?: any;
  id: string;

  [inputProps: string]: any;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  defaultValue,
  ...rest
}) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel htmlFor={id} sx={{ textTransform: "uppercase" }}>
        {label}
      </InputLabel>
      <StyledInput defaultValue={defaultValue} id={id} {...rest} />
    </FormControl>
  );
};

export default FormInput;
