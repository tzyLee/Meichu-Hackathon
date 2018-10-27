
import numpy as np
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
    