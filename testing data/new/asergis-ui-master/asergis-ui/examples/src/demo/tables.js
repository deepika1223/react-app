import React, { Fragment } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Button, Table } from "../../../src";

const DemoBlock = styled(View)`
  display: block;
`;

const onDelete = () => {
  console.log('Delete')
};

const listColumns = [
  {
    title: "Conference Name",
    name: "name",
    filter: {
      type: "text"
    }
  },
  {
    title: "Date",
    name: "date",
    filter: {
      type: "date"
    }
  },
  {
    title: "Status",
    name: "status",
    content: item => (item.live ? "live" : "-"),
    filter: {
      type: "select",
      options: [{ value: 1, label: "Live" }, { value: 0, label: "Non-Live" }]
    }
  },
  {
    title: "Actions",
    name: "actions",
    filter: {
      type: "button",
      name: "Delete",
      onClick: onDelete
    },
    content: item => <Button>Action</Button>
  }
];

const listColumns2 = [
  {
    title: "Conference Name",
    name: "name"
  },
  {
    title: "Date",
    name: "date"
  },
  {
    title: "Status",
    name: "status",
    content: item => (item.live ? "live" : "-"),
  }
];

const testData = [
  {
    id: 1,
    name: "First line",
    date: 'Date',
    status: true
  },
  {
    id: 2,
    name: "Next line",
    date: 'Date',
    status: true
  }
];

const changeListFilter = filter => {
  console.log('New list filter: ', filter)
};
const onCheck = (checked) => {
  console.log('checked', checked)
};

const Tables = () => (
      <Fragment>
        Table
      <Table
        name="testTable"
        onCheck={onCheck}
        data={testData}
        columns={listColumns}
        changeFilter={changeListFilter}
        pages={3}
      />
      <h3>Table without header, pagination, filter, checkboxes</h3>
      <Table
        name="testTable2"
        data={testData}
        columns={listColumns2}
        header={false}
      />
      </Fragment>
);

export default Tables;




