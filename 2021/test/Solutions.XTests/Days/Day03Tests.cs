using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using Solutions.Days;
using Xunit;

namespace Solutions.XTests.Days;

public class UnitTest3: IAsyncLifetime
{
    private readonly Day03 _day03 = new();
    private string? _input;

    public async Task InitializeAsync()
    {
        _input = await File.ReadAllTextAsync("./Inputs/Day03.txt");
    }

    public Task DisposeAsync()
    {
        return Task.CompletedTask;
    }

    [Fact]
    public void HandTestPart1()
    {
        const string input = @"";
        var answer = _day03.Part1(input);
        Debug.WriteLine(answer);
    }

    [Fact]
    public void Part1()
    {
        var answer = _day03.Part1(_input!);
        Debug.WriteLine(answer);
        Assert.Equal(2102357, answer);
    }

    [Fact]
    public void HandTestPart2()
    {
        const string input = @"";
        var answer = _day03.Part2(input);
        Debug.WriteLine(answer);
    }

    [Fact]
    public void Part2()
    {
        var answer = _day03.Part2(_input!);
        Debug.WriteLine(answer);
        Assert.Equal(2101031224, answer);
    }
}
