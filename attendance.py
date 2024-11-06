import csv

file = csv.reader(open('attendance.csv', 'r')) # Change attendance.csv to name of attendance file

def attendanceRate(osis):
    string = str(osis)
    for row in file:
        if row[0] == string:
            return row[2]
    return "Attendance could not be retreived"
