import React, { Fragment } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import {
  withFormData,
  Button,
  Form,
  Input,
  Checkbox,
  Textarea,
  Switch,
  DateTime,
  Radio,
  Select,
  FormGroup,
  FormArr,
  Slider
  // Slider
} from "../../../src";

const DemoBlock = styled(View)`
  display: block;
  width: 400px;
  padding: 10px;
`;

const Forms = (props) => {
  const { formData } = props;
  //console.log('formData', formData)

  const defaultValues = {
    input1: 'Test',
    select1: '2',
    radio1: '2',
    checkbox1: true,
    checkboxGroup1: ['check2']
  }

  const methods = {
    onSubmit: (formData) => {
      //console.log('submit', formData)
    }
  }

  return (
    <Fragment>
      <DemoBlock>
        <Form name="testForm" defaultValues={defaultValues} onSubmit={methods.onSubmit}>
          <FormGroup>
            <Input type="text" name="input1" label="Required Input" required/>
            <Input type="text" name="input3" label="Optional input" />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="input2" label="Optional input" />
          </FormGroup>
          <Textarea name="textarea1" label="Textarea" />
          <Select
            name="select1"
            label="Select field"
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
              { value: "3", label: "Option 3" }
            ]}
          />
          <Radio
            name="radio1"
            label="Radio group"
            defaultValue="1"
            options={[
              { value: "1", label: "Radio 1" },
              { value: "2", label: "Radio 2" }
            ]}
          />
          {/* <DateTime type="time" name="time1" label="Time element" /> */}
          {/* <DateTime type="date" name="time1" label="Date element" /> */}
          <Switch name="switch1" value="switch1" label="Switch element" inline />
          <Slider name="slider1" label="Slider" options={{min: 1, max: 100}} label="Participant Limit" />
          <Checkbox name="checkbox1" value="checkbox1" label="Checkbox" />

          <Checkbox name="check1" group="checkboxGroup1" label="Checkbox Array 1" />
          <Checkbox name="check2" group="checkboxGroup1" label="Checkbox Array 2" />

          <h2>Form Array</h2>
          <FormArr name="arr" count={2} label="Form Arr">
            <Input type="text" name="inputArr" label="Required Input" required/>
            <Checkbox name="checkboxArr"  label="Checkbox Array 1" />
              <Select
                arr="arr"
                name="selectArr"
                label="Select field"
                options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" }
              ]}
              />
          </FormArr>

          <Button type="submit">Submit</Button>
        </Form>
      </DemoBlock>
    </Fragment>
  )
}

// export default Forms;
export default withFormData('testForm')(Forms);
