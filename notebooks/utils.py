from os import listdir
from os.path import join
from pandas import read_csv
from numpy import amax, percentile

def load_csv_data(directory):
    files = listdir(directory)
    data = {}

    for file in files:
        key = file[:-4]
        data[key] = read_csv(join(directory, file))

    return data

def calc_path_stats(phase_results):
    p95 = percentile(phase_results,95) * 1000
    p99 = percentile(phase_results,99) * 1000
    max = amax(phase_results) * 1000

    return [p95, p99, max]
