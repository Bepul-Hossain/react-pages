import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import BasicTableData from './BasicTableData';

const { tableHeaderData, tableRowsData } = BasicTableData();

const BorderedTable = ({ t }) => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('tables.basic_tables.bordered_table')}</h5>
          <h5 className="subhead">Use default table with class
            <span className="red-text"> table--bordered</span>
          </h5>
        </div>
        <Table className="table--bordered" responsive>
          <thead>
            <tr>
              {tableHeaderData.map(item => (
                <th key={item.id}>{item.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRowsData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.username}</td>
                <td><Badge color={item.status}>{item.badge}</Badge></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

BorderedTable.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BorderedTable);
