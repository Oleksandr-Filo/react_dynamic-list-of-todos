import React from 'react';

type Props = {
  onSelectStatus: (status: string) => void;
  status: string;
  onFilter: React.Dispatch<React.SetStateAction<string>>;
  query: string;
};

export const TodoFilter: React.FC<Props> = ({
  onSelectStatus,
  status,
  onFilter,
  query,
}) => {
  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={status}
            onChange={(event) => {
              onSelectStatus(event.currentTarget.value);
            }}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={event => onFilter(event.currentTarget.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => onFilter('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
