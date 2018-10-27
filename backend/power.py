import numpy as np

loc = list(range(1, 6))
def extract_scores(scores_dict):
    scores = np.zeros(len(loc))
    for l in loc:
        scores[l - 1] = scores_dict[l]
    return scores

def compute_saving(scores):
    """
    Args:
        scores: a numpy array
        power: power to allocate
    Returns:
        Saving
    """
    n = len(scores)
    s_min = min(scores)
    return (n / (s_min * np.sum(1 / scores)) - 1) * 100
    