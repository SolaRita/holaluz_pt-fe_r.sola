import {Grid} from "../../components/grid"


describe('Given a CUPS', () => {

  test ('shoud return a string', () => {
    const result = Grid ('un cups');
    expect(typeof result).toBe('string');
  });
  
  });
