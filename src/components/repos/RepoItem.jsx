import PropTypes from 'prop-types'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'


function RepoItem({repo}) {
    const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo


  return (
    <div className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-1'/>{name}
          </a>
        </h3>
        </div>
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem