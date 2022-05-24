import React from 'react';
import { useGetCategoryByNameQuery } from '../../app/services/category'
import { changeTitle, changeCategory, getDate } from '../footer/footerSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import './index.scss';

export function Header() {
  const { data, isLoading } = useGetCategoryByNameQuery('getCategory')
  const dispatch = useAppDispatch()
  const submitData = useAppSelector(getDate)
  const setTitle = function(value: string){
    dispatch(changeTitle({
      title: value
    }))
  }
  const setValue = (value: string) => {
    dispatch(changeCategory({
      category: value
    }))
  }
  return (
    <div className="headers">
      <div className="columns">
        <div className="column">
            <section className="hero">
              <div className="hero-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      value={submitData.title}
                      autoComplete="off"
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="文章标题"
                    />
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div className="column">
        <section className="hero is-bold">
              <div className="hero-body">
                <div className="field">
                  <div className="control">
                    <div className={`select is-large select`}>
                      <select
                        className='select'
                        value={submitData.category}
                        onChange={(e) => setValue(e.target.value)}
                      >
                        {!isLoading && data.data.map((item: any) => {
                          return (
                            <option key={item.category_id} value={item.category_id}>
                              {item.category_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </div>
    </div>
  );
}

// const mapState = (state: any) => state.SubmitReducer

// const actionCreators = {
//   changeTitle, 
//   changeCategory
// };

// export const ConnectedHeader = connect(
//   mapState,
//   actionCreators
// )(Header);

