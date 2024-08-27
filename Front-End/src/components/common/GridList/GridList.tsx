import { Row, Col } from 'react-bootstrap';

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

// we made it optional cuz it's optional with TCategory
// and we made it so, cuz we didn't need it in Category props
type HasID = { id?: number };

const GridList = <T extends HasID>({
  records,
  renderItem,
}: GridListProps<T>) => {
  // we have to check by length and not just "records" for validity
  // cuz the initial value for records is an empty array [] which is a valid value!
  const itemsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            key={record.id}
            md={3}
            className='d-flex justify-content-center mb-5 mt-2'
          >
            {renderItem(record)}
          </Col>
        ))
      : 'There are no items';

  return <Row>{itemsList}</Row>;
};

export default GridList;
