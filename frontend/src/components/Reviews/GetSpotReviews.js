import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSpotReviewsThunk, deleteReviewThunk } from '../../store/reviews';
// import WriteReviewForm from './WriteReviewForm';

import "../Spots/Spots.css"
import "./reviews.css"

//get reviews for one spot
const GetSpotReviews = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const { spotId } = useParams();

    const reviews = useSelector(state => {
        if (!state.reviews.spotReviewsArr) return null;
        return state.reviews.spotReviewsArr.map((reviewObj) => {
            return reviewObj
        });
    });

    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getSpotReviewsThunk(spotId));
    }, [dispatch, spotId]);

    if (!reviews) {
        return null;
    }
    const getMonth = (monthUTC) => {
        const month = new Date(monthUTC);
        return month.getUTCMonth() + 1;
    }

    const getDay = (dayUTC) => {
        const day = new Date(dayUTC);
        return day.getUTCDate();
    }

    const getYear = (yearUTC) => {
        const year = new Date(yearUTC);
        return year.getUTCFullYear();
    }

    return (
        <main className='reviewsMain'>
            <div className='reviewsContainer'>
                <div className='reviewsContent'>

                    <h2 className='reviewTitle'>Reviews:</h2>
                    {reviews.map((review) => {
                        return (
                            <div key={review.id}>
                                <div className='reviewContent'>
                                    <div>{
                                        getMonth(review.createdAt)}
                                        /{getDay(review.createdAt)}
                                        /{getYear(review.createdAt)}
                                    </div>
                                    <div>{review.review}</div>
                                </div>
                                {((sessionUser) && (review.userId === sessionUser.id)) && (
                                    <button onClick={() => {
                                        dispatch(deleteReviewThunk(review.id));
                                        history.push(`/spots/${spotId}`);
                                    }} className='button'>
                                        <span className="submit">
                                            Delete review
                                        </span>
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default GetSpotReviews;
