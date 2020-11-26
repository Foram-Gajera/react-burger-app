import React from "react";

//enzyme is use to test the unit of code from project it runs code standalone
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

//it is to connect enzyme to this code
configure({ adapter: new Adapter() });

describe("<NavigationItem />", () => {
  let wrapper;

  //beforeEach runs before all the test cases
  beforeEach(() => {
    //shallow contains the main node it not goes to the root of the node
    wrapper = shallow(<NavigationItems />);
  });

  //it() is used to define test cases
  it("should render two <NavigationItem /> elements if not authenticated", () => {
    // const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render three <NavigationItem /> elements if authenticated", () => {
    // const wrapper = shallow(<NavigationItems isAuthenticated />);

    wrapper.setProps({ isAuthenticated: true }); //provided by the enzyme package
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("should render logout nam=vigationItem if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true }); //provided by the enzyme package
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
