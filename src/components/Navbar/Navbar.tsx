import { Input, Button, Select } from "antd";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
interface IProps {
  items: any;
  setFiltered: any;
  filtered: any;
}
function Navbar({ items, setFiltered, filtered }: IProps) {
  const [sort, setSort] = useState("unsorted");
  const [filterStatus, setFilterStatus]: any = useState("all");
  const onSearch = (value: string) => {
    const search = filtered.filter((item: any) =>
      Object.values(item).some((i: any) =>
        i.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFiltered(search);
    if (value === "") {
      setFiltered(items);
    }
  };

  const onSortChange = () => {
    if (sort === "asc" || sort === "unsorted") {
      let asc = [...filtered].sort((a: any, b: any) =>
        a.name < b.name ? 1 : -1
      );
      setSort("dsc");
      return setFiltered(asc);
    } else {
      setSort("asc");
      let dsc = [...filtered].sort((a: any, b: any) =>
        a.name > b.name ? 1 : -1
      );
      return setFiltered(dsc);
    }
  };

  const onSelectChange = (value: string) => {
    setFilterStatus(value);
  };

  useEffect(() => {
    if (filterStatus == "all") {
      return setFiltered(items);
    } else if (filterStatus === true) {
      let active = items.filter((data: any) => data.status === true);
      return setFiltered(active);
    } else {
      let inactive = items.filter((data: any) => data.status === false);
      return setFiltered(inactive);
    }
    //eslint-disable-next-line
  }, [filterStatus]);
  return (
    <nav className={styles.nav}>
      <h3 className={styles.h3}>Navbar</h3>

      <div className={styles.componentsFilter}>
        <Button size="small" onClick={onSortChange}>
          Sort data
        </Button>
        <Select
          size="small"
          defaultValue="Filter By"
          style={{ width: 120 }}
          onChange={onSelectChange}
        >
          <Select.Option value={"all"}>All</Select.Option>
          <Select.Option value={true}>Active</Select.Option>
          <Select.Option value={false}>Inactive</Select.Option>
        </Select>

        <Input.Search
          size="small"
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
